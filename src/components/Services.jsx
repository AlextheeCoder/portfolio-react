import React from "react";

const Services = () =>{

    return(
        <div className="services">
            <h1>My Services</h1>
            <p>Explore the range of services I offer to meet your needs.</p>
            <div className="cards">
                <div className="card">
                    <h2>Data Science Solutions</h2>
                    <p>In the realm of data science, I utilize Python's extensive libraries and tools to conduct thorough data analysis, applying statistical methods and creating insightful visualizations. My machine learning expertise spans across Python, enabling the development of predictive models, classification systems, and recommendation engines.

                        Whether it's extracting meaningful insights from data or transforming complex datasets into comprehensible visualizations, my data science services are designed to empower clients with actionable intelligence.</p>
                </div>
                <div className="card">
                    <h2>Multi-Language Development</h2>
                    <p>My expertise spans across Java, Python, and C++, providing clients with versatile and comprehensive software solutions.

                        From Java's platform-independent capabilities for building robust applications to Python's readability and adaptability across various domains, and C++'s high-performance capabilities suitable for resource-intensive applications, I bring a well-rounded set of skills to cater to diverse software development needs.</p>
                </div>
                <div className="card">
                    <h2>Web Development</h2>
                    <p>Harnessing the power of both Laravel and the MERN stack, I craft dynamic and responsive web applications. Whether it's utilizing the elegance of Laravel's PHP framework or the flexibility of MongoDB, Express.js, React.js, and Node.js in the MERN stack, I create modern, scalable, and feature-rich web solutions tailored to client requirements. </p>
                </div>
            </div>
        </div>
    )
}

export default Services;