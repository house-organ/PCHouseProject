/********************************
 * @file: market page 楼市
 * @desc: react-redux market list
 *******************************/

import React from "react";
import { Timeline } from 'antd';
import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.css'

import Header from "component/header";
import Footer from "component/footer"
import './index.scss'

export default class App extends React.Component {
	state = {
		data:[
			{id:'1',text:'Create a services site ',time:'2015-09-01'},
			{id:'1',text:'Create a services site ',time:'2016-02-01'},
			{id:'1',text:'Create a services site ',time:'2017-05-01'},
			{id:'1',text:'Create a services site ',time:'2018-06-01'},
			{id:'1',text:'Create a services site ',time:'2019-07-01'},
			{id:'1',text:'Create a services site ',time:'2020-08-01'},
		],
		list:'22'
	}

	constructor(props) {
		super(props);
		// this.state={}
		super();
		this.state = {
			index: 0
		}
	}
	componentWillMount() {
		// console.log("item",this.state.list)
	}

	componentDidMount(){
		let galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 4,
			// control: [galleryThumbs,galleryTop],
			loop: true,
			freeMode: true,
			autoplay:true,
			loopedSlides: 5, //looped slides should be the same
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		let galleryTop = new Swiper('.gallery-top', {
			spaceBetween: 10,
			loop:true,
			loopedSlides: 5, //looped slides should be the same
			autoplay:true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: galleryThumbs,
			},
		});
	}

	render() {



		return (
			<div>
				<Header />
				<div className="todo column is-8 timeline-box">
					market
					<Timeline>
						{
							this.state.data && this.state.data.map((item,index)=>{
								return (<Timeline.Item key={index}>{item.text}<span className="item-time">{item.time}</span></Timeline.Item>)
							})
						}
					</Timeline>
					<div className="sw-box">
						<div className="swiper-container gallery-top">
							<div className="swiper-wrapper">
								<div className="swiper-slide">1</div>
								<div className="swiper-slide">2</div>
								<div className="swiper-slide">3</div>
								<div className="swiper-slide">4</div>
								<div className="swiper-slide">5</div>
								<div className="swiper-slide">6</div>
								<div className="swiper-slide">7</div>
								<div className="swiper-slide">8</div>
								<div className="swiper-slide">9</div>
								<div className="swiper-slide">0</div>
							</div>
							<div className="swiper-button-next swiper-button-white"></div>
							<div className="swiper-button-prev swiper-button-white"></div>
						</div>
						<div className="swiper-container gallery-thumbs">
							<div className="swiper-wrapper">
								<div className="swiper-slide">1</div>
								<div className="swiper-slide">2</div>
								<div className="swiper-slide">3</div>
								<div className="swiper-slide">4</div>
								<div className="swiper-slide">5</div>
								<div className="swiper-slide">6</div>
								<div className="swiper-slide">7</div>
								<div className="swiper-slide">8</div>
								<div className="swiper-slide">9</div>
								<div className="swiper-slide">0</div>
							</div>
						</div>
					</div>


				</div>
				<Footer />
			</div>
		);
	}
}


