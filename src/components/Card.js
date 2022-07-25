/* start variable declare*/
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

function Card(props){
    const {title, detail, stock} = props;
    return(
        <div className="card">
            <h2 className="cardTitle">{title}</h2>
            <p className="cardDetail">{detail}</p>
            <p className="cardFooter">{"Qty: " + stock}</p>
            <p className="cardFooter">{"Date: " + dateName + " " + monthName + " " + yearName }</p>
        </div>
    );
}
/* end variable component function*/


export default Card;