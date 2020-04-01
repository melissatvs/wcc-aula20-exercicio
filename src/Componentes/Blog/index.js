import React, { Component } from 'react';
import axios from 'axios';

class Blog extends Component {
    
    state = { 
        post: [],
        id: 1
    }
    
    componentDidMount = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + this.state.id.toString())
        .then(resposta => {
            this.setState({ post: resposta.data });
        });
    }
    
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.id !== this.state.id) {
            axios.get("https://jsonplaceholder.typicode.com/posts/" + this.state.id.toString())
            .then(resposta => {
                this.setState({ post: resposta.data });
            }); 
        }
    }
    
    
    getProximo = () => {
        if (this.state.id)
        this.setState({ id: this.state.id +1 })
    }
    
    getAnterior = () => {
        this.setState({ id: this.state.id -1 })
    }
    
    render() { 
        return (
            <main className="blog">
                <section className="post">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                </section>
                <section className="navigation">
                    <button onClick={this.getAnterior}>Anterior</button>
                    <button onClick={this.getProximo}>Próximo</button>
                </section>            
            </main>    
            );
        }
        
    }
    
    export default Blog;