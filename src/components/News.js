import React, { Component } from 'react'
import NewsItem from "./NewsItem"
import Spinner from "./Spinner"
import PropTyes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import data from "./data.json"

export default class News extends Component {
	static defaultProps = {
		pageSize: 5,
		country: "in",
		category: "general",
	}
	static propTypes = {
		pageSize: PropTyes.number,
		country: PropTyes.string,
		category: PropTyes.string,
	}
	constructor(props) {
		super();
		this.state = {
			articles: [],
			loading: false,
			page: 1,
			totalResults: 0,
			items: Array.from({ length: 20 })
		}
		document.title = props.category.charAt(0).toUpperCase() + props.category.slice(1) + " - News App"
	}

	fetchMoreData = async () => {
		// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${++this.state.page}&pageSize=${this.props.pageSize}`;
		// let data = await fetch(url);
		// let parsedData = await data.json();
		let parsedData = data[this.props.category]
		let parsedDataArticles = parsedData.articles.slice( 0, (++this.state.page) * this.state.page )
		this.setState({
			articles: parsedDataArticles,
			// articles: this.state.articles.concat(parsedData.articles),
		})
	};

	async componentDidMount() {
		this.props.setProgress(10)
		this.setState({ loading: true })

		// let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		// let data = await fetch(url);
		// let parsedData = await data.json();

		let parsedData = data[this.props.category]
		let parsedDataArticles = parsedData.articles.slice( 0, this.props.pageSize )
		setTimeout(() => {
			this.setState({
				// articles: parsedData.articles,
				articles: parsedDataArticles,
				totalResults: parsedData.totalResults,
				loading: false,
			})
			this.props.setProgress(100)
		}, 200);
	}

	render() {
		return (
			<div className='py-5 my-5'>
				<h1 className='text-center pt-3' >Global News - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines </h1>
				{this.state.loading && <Spinner />}
				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={
						this.state.articles.length < this.state.totalResults
					}
					loader={<Spinner />}
				>
					<div className="my-4 container d-flex flex-row flex-wrap justify-content-around">
						{this.state.articles.map((element) => {
							return <NewsItem
								key={element.url}
								title={element.title}
								desc={element.description}
								imgUrl={element.urlToImage}
								newsUrl={element.url}
								author={element.author}
								date={element.publishedAt}
								source={element.source.name}
							/>
						})}
					</div>

				</InfiniteScroll>
			</div>
		);
	}
}