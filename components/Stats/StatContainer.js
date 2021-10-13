import PropTypes from 'prop-types'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Stats from './Stats'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'

const StatContainer = ({ sand, glass, crown, subStats }) => (
	<Swiper
		modules={[Pagination]}
		spaceBetween={16}
		pagination={{ clickable: true }}
		slidesPerView={2}
		loop
		enabled
		breakpoints={{
			601: {
				slidesPerView: 3,
				spaceBetween: 16,
			},
			960: {
				slidesPerView: 4,
				spaceBetween: 16,
				enabled: false,
			},
			1280: {
				slidesPerView: 4,
				spaceBetween: 8,
				width: 1040,
				enabled: false,
				loop: false,
			},
			1665: {
				slidesPerView: 4,
				spaceBetween: 0,
				width: 800,
				enabled: false,
				loop: false,
			},
		}}
	>
		<SwiperSlide>
			<Stats artifact="sand" stats={sand} />
		</SwiperSlide>
		<SwiperSlide>
			<Stats artifact="glass" stats={glass} />
		</SwiperSlide>
		<SwiperSlide>
			<Stats artifact="crown" stats={crown} />
		</SwiperSlide>
		<SwiperSlide>
			<Stats stat="Sub Stats" stats={subStats} />
		</SwiperSlide>
	</Swiper>
)
StatContainer.propTypes = {
	sand: PropTypes.instanceOf(Array).isRequired,
	glass: PropTypes.instanceOf(Array).isRequired,
	crown: PropTypes.instanceOf(Array).isRequired,
	subStats: PropTypes.instanceOf(Array).isRequired,
}

export default StatContainer
