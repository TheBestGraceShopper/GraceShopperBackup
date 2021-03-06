import React from 'react'
import {ToastContainer, ToastStore} from 'react-toasts';
import {me} from '../../store'
import {connect} from 'react-redux'

class Review extends React.Component {
  componentDidMount () {
    this.props.me();
  }
 render() {

   const isEnabled = this.props.state.rating && this.props.state.title && this.props.state.text
   return (
   <div className="review-pad">
     <ToastContainer lightBackground position={ToastContainer.POSITION.TOP_RIGHT} store={ToastStore}/>
     <h3 className="review-pad"> Reviews: </h3>
     {this.props.state.showForm ? null: <button type="button" onClick={this.props.showForm}> Add Review </button> }
     { this.props.state.showForm ? <div>
       <form onSubmit={this.props.handleSubmit}>

       <label htmlFor='rating'> Rating:  </label>
           <input type ='text' name='rating' onChange={this.props.handleChange} value={this.props.state.rating}/>
           <label htmlFor='title'> Review Title:  </label>
           <input type ='text' name='title' onChange={this.props.handleChange} value={this.props.state.title}/>
           <label htmlFor='text'> Review:  </label>
           <input type ='text' name='text' onChange={this.props.handleChange} value={this.props.state.text}/>

           <button type="submit" disabled={!isEnabled} onClick={() => ToastStore.success("Your review has been successfully added!")}> Submit Review</button>
       </form>
     </div>  : null }
     {this.props.reviews.map(review => {
       const ratingSrc = () => {
        switch (review.rating) {
          case 1:
          return "*";
          case 2:
          return "**";
          case 3:
          return "***";
          case 4:
          return '*****';
          case 5:
          return '*****';
          default:
            return '******'
        }
      }
       let reviewDate = review.id ? review.createdAt.slice(0, 10).split('-') : null;
       let formattedDate = review ? `${reviewDate[1]}/${reviewDate[2]}/${reviewDate[0]}` : null
       return (
         <div key={review.id}>
           {/* <img src={ratingSrc()}/> */}
           <h3>{review.title}</h3>
           <h1>  {ratingSrc()} </h1>
           {review.user ? <p> By User {review.user.firstName} {review.user.lastName}</p> :<p> By User {this.props.user.firstName} {this.props.user.lastName} </p>}
           <p> on {formattedDate} </p>
           <p> {review.text}</p>
         </div>
     )})}
   </div>
   )
 }
}
const mapState = (state) => {
    return ({user: state.user})
}
const mapDispatch = (dispatch) => ({
  me : () => dispatch(me())
})

export default connect(mapState, mapDispatch)(Review);
