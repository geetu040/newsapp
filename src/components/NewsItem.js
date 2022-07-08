import React, { Component } from "react"

export default class NewsItem extends Component {
	render() {
		let { title, desc, imgUrl, newsUrl, author, date, source } = this.props;
		return (<>
			{imgUrl ? 
			<div className="card my-4 mx-4" style={{width: "16rem"}}>
				<img src={imgUrl} className="card-img-top" alt="..." />
				<div className="card-body d-flex flex-column justify-content-between">
					<div>
						<h5 className="card-title">{title ? title.slice(0, 45) + "..." : ""}</h5>
						<p className="card-text">{desc ? desc.slice(0, 80) + "..." : ""}</p>
					</div>
					<div className="d-flex flex-column align-items-center pt-3">
						<p className="card-text text-center text-wrap"><small className="text-muted">
							{author && <> By "{author}" <br /> </>} On {(new Date(date)).toGMTString()}
						</small></p>
						<a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Read More</a>
					</div>
				</div>
				<span style={{left: "80%", zIndex:'1'}} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
					{source}
				</span>
			</div>
			: ""}
		</>)

	}
}