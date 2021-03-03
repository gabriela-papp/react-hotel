import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free conctails",
                info: "lorem12 hello foe are you ia m ver glad that everything is ok with you"
            },
            {
                icon: <FaHiking />,
                title: "free conctails",
                info: "lorem12 hello foe are you ia m ver glad that everything is ok with you"
            },
            {
                icon: <FaShuttleVan />,
                title: "free shuttle van",
                info: "lorem12 hello foe are you ia m ver glad that everything is ok with you"
            },
            {
                icon: <FaBeer />,
                title: "strongest beer",
                info: "lorem12 hello foe are you ia m ver glad that everything is ok with you"
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (<article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>)
                    })}
                </div>
            </section>
        )
    }
}
