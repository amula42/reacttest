import React, { useState } from "react";

const ContactOne = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    
    let name, value;
    const getUserData = (event) => {
        name= event.target.name;
        value= event.target.value;
        setUser({ ...user, [name]:value });
    };
    const postData = async(e) => {
        e.preventDefault();

        const { name, email, phone, message } = user;
        if (( name && email && phone && message )) {
            const res = await fetch(
                `${process.env.REACT_APP_API_URL}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        message,
                    })
                }
                );
                if (res) {
                    setUser({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                    alert("Thank You👍, I'll cantact you soon.");
                }
        } else {
            alert("Please, Fill all the data🙏");
        }
    };

    return(
        <div className="contact-form--1">
            <div className="container">
                <div className="row row--35 align-items-start">
                    <div className="col-lg-6 order-2 order-lg-1">
                        <div className="section-title text-left mb--50">
                            <h2 className="title">Hire Me.</h2>
                            <p className="description">I am available for freelance work. Connect with me via phone: <a href="tel:+918697384021">08697 384021</a> or email:
                                <a href="mailto:amula42@gmail.com"> amula42@gmail.com</a> </p>
                        </div>
                        <div className="form-wrapper">

                            <form method="POST">
                                <label htmlFor="item01">
                                    <input
                                        type="text"
                                        name="name"
                                        id="item01"
                                        autoComplete="off"
                                        value={user.name}
                                        onChange={getUserData}
                                        placeholder="Your Name *"
                                    />
                                </label>

                                <label htmlFor="item02">
                                    <input
                                        type="text"
                                        name="email"
                                        id="item02"
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={getUserData}
                                        placeholder="Your email *"
                                    />
                                </label>

                                <label htmlFor="item03">
                                    <input
                                        type="text"
                                        name="phone"
                                        id="item03"
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={getUserData}
                                        placeholder="Your phone *"
                                    />
                                </label>
                                <label htmlFor="item04">
                                    <textarea
                                        type="text"
                                        id="item04"
                                        name="message"
                                        autoComplete="off"
                                        value={user.message}
                                        onChange={getUserData}
                                        placeholder="Your Message"
                                    />
                                </label>
                                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe" onClick={postData}>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className="thumbnail mb_md--30 mb_sm--30">
                            <img src="/assets/images/about/about-6.jpg" alt="trydo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

// class ContactOne extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             rnName: '',
//             rnEmail: '',
//             rnSubject: '',
//             rnMessage: '',
//         };
//     }
//     render(){
//         return(
//             <div className="contact-form--1">
//                 <div className="container">
//                     <div className="row row--35 align-items-start">
//                         <div className="col-lg-6 order-2 order-lg-1">
//                             <div className="section-title text-left mb--50">
//                                 <h2 className="title">Hire Me.</h2>
//                                 <p className="description">I am available for freelance work. Connect with me via phone: <a href="tel:+918697384021">08697 384021</a> or email:
//                                     <a href="mailto:amula42@gmail.com"> amula42@gmail.com</a> </p>
//                             </div>
//                             <div className="form-wrapper">

//                                 <form>
//                                     <label htmlFor="item01">
//                                         <input
//                                             type="text"
//                                             name="name"
//                                             id="item01"
//                                             value={this.state.rnName}
//                                             onChange={(e)=>{this.setState({rnName: e.target.value});}}
//                                             placeholder="Your Name *"
//                                         />
//                                     </label>

//                                     <label htmlFor="item02">
//                                         <input
//                                             type="text"
//                                             name="email"
//                                             id="item02"
//                                             value={this.state.rnEmail}
//                                             onChange={(e)=>{this.setState({rnEmail: e.target.value});}}
//                                             placeholder="Your email *"
//                                         />
//                                     </label>

//                                     <label htmlFor="item03">
//                                         <input
//                                             type="text"
//                                             name="subject"
//                                             id="item03"
//                                             value={this.state.rnSubject}
//                                             onChange={(e)=>{this.setState({rnSubject: e.target.value});}}
//                                             placeholder="Write a Subject"
//                                         />
//                                     </label>
//                                     <label htmlFor="item04">
//                                         <textarea
//                                             type="text"
//                                             id="item04"
//                                             name="message"
//                                             value={this.state.rnMessage}
//                                             onChange={(e)=>{this.setState({rnMessage: e.target.value});}}
//                                             placeholder="Your Message"
//                                         />
//                                     </label>
//                                     <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
//                                 </form>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 order-1 order-lg-2">
//                             <div className="thumbnail mb_md--30 mb_sm--30">
//                                 <img src="/assets/images/about/about-6.jpg" alt="trydo"/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
export default ContactOne;