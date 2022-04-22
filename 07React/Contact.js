import React from "react"

// export default function Contact(props) {
//     /**
//      * Challenge: Fix the code below to use the `props`
//      * object values in place of the hardcoded values below
//      */
//     return (
//         <div className="contact-card">
//             <img src={props.img}/>
//             <h3>{props.name}</h3>
//             <div className="info-group">
//                 <img src="./images/phone-icon.png" />
//                 <p>{props.phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src="./images/mail-icon.png" />
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     )
// }

/* 
{
    img: "./images/mr-whiskerson.png", 
    name: "Mr. Whiskerson", 
    phone: "(212) 555-1234", 
    email: "mr.whiskaz@catnap.meow"
}

*/


export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}

// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// const {img, name, email} = person
// console.log(name,email)