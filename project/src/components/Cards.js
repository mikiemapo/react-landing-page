// const Cards = (props) => {
//     return (
//         <div className="card" style="width: 18rem;">

//         <div className="card-body">
//           <p className="card-text">{props.discription}</p>
//         </div>
//       </div>
//     )
// }

// Cards.propTypes = {
// 	title: PropTypes.string,
// 	description: PropTypes.string,
// };

// ReactDOM.render(
// 	<Cards
// 		title="Welcome to react"
// 		description="React is the most popular rendering library in the world"
// 	/>,

// 	document.querySelector("#myDiv")
// );

const Cards = () => {
    return (
        <div className="Cards" style="width: 18rem;">
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default Cards