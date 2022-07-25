/* start variable declare*/
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();
const title = "Call Family";
const detail = "If you don’t experience the problems described above or don’t feel comfortable using JavaScript tools yet"
/* end variable declare*/
/* start variable component function*/
function Card(){
    return <div className="card">
        <h2 className="cardTitle">{title}</h2>
        <p className="cardDetail">{detail}</p>
        <p className="cardFooter">{dateName + " " + monthName + " " + yearName }</p>
    </div>
}
/* end variable component function*/


export default Card;