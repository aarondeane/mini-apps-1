const Home = (props) => {
    return (
        <form id="F1" onSubmit={props.handleSubmit}>
            <input type="submit" value="Begin Checkout" />
        </form>
    )
}

const F1 = (props) => {
    const isComplete = props.isComplete;
    return(
    <form id="F2" onSubmit={props.handleSubmit}>
        <label>
            First Name:
            <input type="text" name="firstName" onChange={props.handleChange} />
        </label><br/>
        <label>
            Last Name:
            <input type="text" name="lastName" onChange={props.handleChange} />
        </label><br/>
        <label>
            Email:
            <input type="text" name="email" onChange={props.handleChange} />
        </label><br/>
        <label>
            Password:
            <input type="text" name="password" onChange={props.handleChange} />
        </label><br/>
        <input type="submit" value="Next" />
    </form>
    );
}

const F2 = (props) => (
    <form id="F3" onSubmit={props.handleSubmit}>
        <label>
            Address:
            <input type="text" name="address1" onChange={props.handleChange} />
        </label><br/>
        <label>
            Address cont:
            <input type="text" name="address2" onChange={props.handleChange} />
        </label><br/>
        <label>
            City:
            <input type="text" name="city" onChange={props.handleChange} />
        </label><br/>
        <label>
            State:
            <input type="text" name="state" onChange={props.handleChange} />
        </label><br/>
        <label>
            Zip Code:
            <input type="text" name="zip" onChange={props.handleChange} />
        </label><br/>
        <label>
            Tel:
            <input type="text" name="phone" onChange={props.handleChange} />
        </label><br/>
        <input type="submit" value="Next" />
    </form>
)

const F3 = (props) => (
    <form id="Confirm" onSubmit={props.handleSubmit}>
        <label>
            Credit Card Number:
            <input type="text" name="cardnum" onChange={props.handleChange} />
        </label><br/>
        <label>
            Expiration:
            <input type="text" name="expire" onChange={props.handleChange} />
        </label><br/>
        <label>
            CVV:
            <input type="text" name="cvv" onChange={props.handleChange} />
        </label><br/>
        <label>
            Billing Zip:
            <input type="text" name="billZip" onChange={props.handleChange} />
        </label><br/>
        <input type="submit" value="Next" />
    </form>
)

const Confirm = (props) => (
    <form id="Home" onSubmit={props.handlePost}>
        <label className="confirmMsg">Please Confirm Your Information Before Purchasing</label><br/>
        <label>First Name:</label>
        <span>{props.info.firstName}</span><br />
        <label>Last Name:</label>
        <span>{props.info.lastName}</span><br />
        <label>Email:</label>
        <span>{props.info.email}</span><br />
        <label>Address:</label>
        <span>{props.info.address1}, {props.info.address2}</span><br />
        <label>City:</label>
        <span>{props.info.city}</span><br />
        <label>State:</label>
        <span>{props.info.state}</span><br />
        <label>Zip Code:</label>
        <span>{props.info.zip}</span><br />
        <label>Tel:</label>
        <span>{props.info.phone}</span><br />
        <label>Billing Zip:</label>
        <span>{props.info.billZip}</span><br />
        <input type="submit" value="Purchase" />
    </form>
)

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formId: 'Home',
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            address1:'',
            address2:'',
            city:'',
            state:'',
            zip:'',
            phone:'',
            cardnum:'',
            expire:'',
            cvv:'',
            billZip:'',
        };
        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePost = this.handlePost.bind(this);
    };

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        
    }

    handleSubmit(event) {
        let next = event.target.id;    
        event.preventDefault();
        this.setState({
            formId: next
        });
    }

    handlePost(event) {
        event.preventDefault();
        let next = event.target.id;
        let order = this.state;

        fetch('/', {
            method: 'POST',
            body: JSON.stringify(order),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => console.log('Order Submitted!'))
        .then(() => {
            this.setState({
                formId: next
            });
        });
    }

    render() {
        let formId = this.state.formId;
        let currentPage;
        
        switch(formId) {
            case 'Home':
            currentPage = <Home handleSubmit={this.handleSubmit} />;
            break;
            case 'F1':
            currentPage = <F1 handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
            break;
            case 'F2':              
            currentPage = <F2 handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
            break;
            case 'F3':
            currentPage = <F3 handleChange={this.handleChange} handleSubmit={this.handleSubmit} />;
            break;
            case 'Confirm':
            currentPage = <Confirm info={this.state} handlePost={this.handlePost}/>
            break;
        }

        return (
            <div className="pagecontent">
                {currentPage}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));