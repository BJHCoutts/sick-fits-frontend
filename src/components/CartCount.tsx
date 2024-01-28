import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function CartCount({ count }: { count: number }) {
	return (
		<SAnimation>
			<TransitionGroup>
				<CSSTransition
					unmountOnExit
					className="count"
					classNames="count"
					key={count}
					timeout={{ enter: 400, exit: 400 }}
				>
					<SDot>{count}</SDot>
				</CSSTransition>
			</TransitionGroup>
		</SAnimation>
	)
}

const SDot = styled.div`
	background-color: var(--red);
	color: white;
	border-radius: 50%;
	padding: 0.5rem;
	line-height: 2rem;
	min-width: 3rem;
	margin-left: 1rem;
	font-variant-numeric: tabular-nums;
`
const SAnimation = styled.span`
	position: relative;
	.count {
		display: block;
		position: relative;
		transition: transform 0.4s;
		backface-visibility: hidden;
	}
	.count-enter {
		transform: scale(4) rotateX(.5turn)
	}
	.count-enter-active {
		transform: rotateX(0);
	}
	.count-exit {
		top: 0;
		position: absolute;
		transform: rotateX(0);
	}
	.count-exit-active {
		transform: scale(4) rotateX(.5turn):
	}
`
