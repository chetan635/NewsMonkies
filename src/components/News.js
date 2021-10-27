import React, { Component } from 'react'
import Cities from './Cities'
import NewsItem from './NewsItem'
import Spinner from './Spinner'



export class News extends Component {
    // constructor
    
    constructor(){
        super()
        console.log("This is constrictor of news component")
        
        this.state={
            articals:[],
            loading: false,
            page : 1
        }
    }

    

    async update(){
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
           
        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0298b809c484335b6f1529fdae01e77&page=${this.state.page}&pagesize=${this.props.pageSize}`
            this.setState({loading: false})
            let data = await fetch(url)
            let parseData = await data.json()
            this.setState({articals:parseData.articles} )
            this.setState({loading: true})
            
        }
    }

    async componentDidMount(){
        
        console.log(this.props.country)
        console.log(this.props.category)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0298b809c484335b6f1529fdae01e77&page=1&&pagesize=${this.props.pageSize}`
        this.setState({loading: false})
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({loading: true})
        this.setState({articals:parseData.articles} )
        this.setState({
            loading: this.loading?false:true,
            totalResults : parseData.totalResults
        })
        

    }

     previ= async()=>{
        
    
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0298b809c484335b6f1529fdae01e77&page=${this.state.page-1}&pagesize=${this.props.pageSize}`
        // this.setState({loading: false})
        // let data = await fetch(url)
        // let parseData = await data.json()
        // this.setState({articals:parseData.articles} )
        // this.setState({loading: true})
          
        this.setState({
            page:this.state.page===1?1:this.state.page-1
        })
        this.update()
    }




     nex= async()=>{
        
        // if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
           
        // }
        // else{
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0298b809c484335b6f1529fdae01e77&page=${this.state.page+1}&pagesize=${this.props.pageSize}`
        //     this.setState({loading: false})
        //     let data = await fetch(url)
        //     let parseData = await data.json()
        //     this.setState({articals:parseData.articles} )
        //     this.setState({loading: true})
            
        // }
        this.setState({
            page:this.state.page+1
        })
        this.update()
        
    }
    render() {

        let {handleCountry} = this.props
        
        return this.state.loading?(
            <>
            <div className = "container my-3 ">
                <h1 className="my-5 text-center">NewsMonkyes - Top headleines</h1>
                <div className="row my-3">
                    {this.state.articals.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} newsUrl={element.url} imageUrl={element.urlToImage}  description={element.description} date={element.publishedAt} author={element.author} source={element.source.name}/>
                    </div>
                    })}
                </div>
            </div>
            <br />
            <br />
            <div className="container d-flex justify-content-between">
                {/* <div type="button" disabled={this.state.page==1} className="btn btn-dark" onClick={this.previ}>&larr; Previous</div>
                <div className="btn btn-dark" onClick={this.nex} >Next &rarr;</div> */}

                <button type="button" disabled={this.state.page==1} class="btn btn-dark" onClick={this.previ}>&larr; Previous</button>
                <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} id="next" onClick={this.nex} type="button" class="btn btn-dark">Next &rarr;</button>

            </div>
            <br />
            <br />
            </>
        ):<Spinner/>
        
    }
}

export default News


// my api key
// 7b237980410d466aaf055efea17d1eb1

// Api
// https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b237980410d466aaf055efea17d1eb1