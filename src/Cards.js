import React from 'react'

const sections = [
    {
        cardColor: "blue",
        logo: "fas fa-headset",
        title: "Agent",
        subtitle: "Learn how to handle cases and support customers.",
    },
    {
        cardColor: "purple",
        logo: "fas fa-user-cog",
        title: "Admin",
        subtitle: "Set up support channels, teams, and automation.",
    },
    {
        cardColor: "red",
        logo: "fas fa-tools",
        title: "Developer",
        subtitle: "Customize, integarate, and automate Desk.com.",
    },
]

const Card = (props) => {
    return(
        <article className={`card ${props.cardColor}`}>
            <span>
                <i className={props.logo}/>
            </span>
            <p className="bold-text">{props.title}</p>
            <p>{props.subtitle}</p>
            <a href="#" className="link">Browse Articles <i className="fas fa-caret-right"/></a>
        </article>
    )
} 

export default function Cards() {
    return (
        <section className="cardHolders">
            {sections.map(sect => {
                return <Card
                    key={sect.title}
                    cardColor={sect.cardColor} 
                    logo={sect.logo} 
                    title={sect.title} 
                    subtitle={sect.subtitle} />
            })}
        </section>
    )
}
