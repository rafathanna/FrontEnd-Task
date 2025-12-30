import React from 'react'

export default function ReviewsSection() {
  return (
   <section className="container reviews-section">
      <h3>Rating & Reviews</h3>
      <div className="reviews-summary">
        <div className="total-score">
            <h1>4,5 <span>/5</span></h1>
        </div>

        <div className="score-breakdown">
            <div className="score-item">
                <span>5</span>
                <div className="progress">
                    <div className="progress-bar" style={{ width: "67%" }}></div>
                </div>
                <span>67%</span>
            </div>
            <div className="score-item">
                <span>4</span>
                <div className="progress">
                    <div className="progress-bar" style={{ width: "15%" }}></div>
                </div>
                <span>15%</span>
            </div>
            <div className="score-item">
                <span>3</span>
                <div className="progress">
                    <div className="progress-bar" style={{ width: "6%" }}></div>
                </div>
                <span>6%</span>
            </div>
            <div className="score-item">
                <span>2</span>
                <div className="progress">
                    <div className="progress-bar" style={{ width: "3%" }}></div>
                </div>
                <span>3%</span>
            </div>
            <div className="score-item">
                <span>1</span>
                <div className="progress">
                    <div className="progress-bar" style={{ width: "9%" }}></div>
                </div>
                <span>9%</span>
            </div>
        </div>

        <div className="toal-reviews">
            <span>total reviews</span>
            <span className='count'>3.0 K</span>
            <button>Add Comment  💬</button>
        </div>

      </div>
    </section>
  
  )}