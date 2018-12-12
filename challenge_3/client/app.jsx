const Home = (props) => {
    return (
        <form id="Home" onSubmit={props.handleSubmit}>
            <input type="submit" value="Begin Checkout" />
        </form>
    )
}

const F1 = (props) => {
    const isComplete = props.isComplete;
    return(
    <form id="F1" onSubmit={props.handleSubmit}>
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
            <input type="text" name="pw" onChange={props.handleChange} />
        </label><br/>
        <input type="submit" value="Next" />
    </form>
    );
}

const F2 = (props) => (
    <form id="F2" onSubmit={props.handleSubmit}>
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
            Phone Number:
            <input type="text" name="phone" onChange={props.handleChange} />
        </label><br/>
        <input type="submit" value="Next" />
    </form>
)

const F3 = (props) => (
    <form id="F3" onSubmit={props.handleSubmit}>
        <label>
            Credit Card Number:
            <input type="text" name="cardnum" onChange={props.handleChange} />
        </label><br/>
        <label>
            Expiration:
            <input type="text" name="expiration" onChange={props.handleChange} />
        </label><br/>
        <label>
            CVV:
            <input type="text" name="cvv" onChange={props.handleChange} />
        </label><br/>
        <label>
            Billing Zip:
            <input type="text" name="billzip" onChange={props.handleChange} />
        </label><br/>
        <input type="submit" value="Next" />
    </form>
)

const Confirm = (props) => {
    
}

const order = [];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formId: 'F1',
            firstName: '',
            lastName:'',
            email:'',
            password:'',
            address:'',
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