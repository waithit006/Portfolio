import React from 'react'

const Education = () => {
    return (
        <div class="container has-text-centered" style={{ padding: '20px' }}>
            <h1 class="title is-1">Education</h1>

            <div class="timeline is-centered" style={{ marginTop: '50px' }}>
                <div class="timeline-item is-primary">
                    <div class="timeline-marker is-primary"></div>
                    <div class="timeline-content">
                        <div class="card">
                            <div class="card-content">
                                <div class="content">
                                    <h5>2009 - 2015</h5>
                                    <p>Patiuwittaya School</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeline-item is-primary">
                    <div class="timeline-marker is-primary"></div>
                    <div class="timeline-content">
                        <p class="heading">February 2016</p>
                        <p>Timeline content - Can include any HTML element</p>
                    </div>
                </div>

                <div class="timeline-item is-danger">
                    <div class="timeline-marker is-danger is-icon">
                        <i class="fa fa-flag"></i>
                    </div>
                    <div class="timeline-content">
                        <p class="heading">March 2017</p>
                        <p>Timeline content - Can include any HTML element</p>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Education
