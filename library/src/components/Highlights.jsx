import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Highlight from './Highlight'

function Highlights() {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight 
                            icon={<FontAwesomeIcon icon="bolt" />}
                            title="Easy and Quick"
                            para="Get access to your books instantly."
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="book-open" />}
                            title="10,000+ Books"
                            para="Books in all your favorite categories."
                        />
                        <Highlight 
                            icon={<FontAwesomeIcon icon="tags" />}
                            title="Affordable"
                            para="Get your hands on books for cheap!"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights