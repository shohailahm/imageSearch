import React, { Component } from 'react'
import SearchBar from '../components/Search'
import Header from '../components/Header'
import './home.css';
import ImageList from '../components/ImageList';
import { onSearchSubmit } from '../unsplash/api';
import Button from '../components/Button';
import Modal from '../components/modal';
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            page:1,
            images:[],
            term:'',
            showModal:false
        }
    }
    submit=async term=>{
        this.setState({loading:true});
        let results=await onSearchSubmit(term,this.state.page);

        this.setState({term:term,images:results,page:1,loading:false},()=>{
        });
    }
    loadMore=async ()=>{
        this.setState({loading:true});
         let results=await onSearchSubmit(this.state.term,this.state.page+1);
         if(results){
             let images=[...this.state.images];
             this.setState({loading:false,page:this.state.page+1,images:[...images,...results]});
         }
    }
    closeModal=()=>{
        this.setState({showModal:false});
    }
    current=(url)=>{
        this.setState({cur:url,showModal:true})
    }
    render() {
        return (
            <div className="home">
                {
                    this.state.showModal && <Modal onClose={this.closeModal} image={this.state.cur}/>
                }
                <Header/>
                <SearchBar onSubmit={this.submit}/>
                <ImageList images={this.state.images} onOpen={this.current}/>
                {this.state.images.length>1 && 
                   <Button onClick={this.loadMore} title="Load More"/>
                }
                <div className={this.state.loading?"loader":""}></div>
            </div>
        )
    }
}
