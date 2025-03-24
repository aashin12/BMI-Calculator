import React, { useState } from 'react'
import "./BMICalculator.css"

function BMICalculator() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmi)

            if (bmi < 18) {
                setCategory("Under Weight");
            }
            else if (bmi >= 18 && bmi <= 25) {
                setCategory("Normal Weight")
            }
            else if (bmi >= 25 && bmi <= 30) {
                setCategory("Over Weight");
            }
            else {
                setCategory("Obese");
            }
        }
    }

    const getImage = () => {
        switch (category) {
            case "Under Weight":
                return "https://img.freepik.com/free-photo/elderly-person-doing-sport_23-2151027748.jpg?uid=R186307674&ga=GA1.1.392089018.1733846059&semt=ais_keywords_boost";
            case "Normal Weight":
                return "https://img.freepik.com/free-photo/portrait-handsome-man_23-2150770955.jpg?uid=R186307674&ga=GA1.1.392089018.1733846059&semt=ais_keywords_boost";
            case "Over Weight":
                return "https://img.freepik.com/free-photo/3d-rendering-chubby-character-beach_23-2151054520.jpg?uid=R186307674&ga=GA1.1.392089018.1733846059&semt=ais_keywords_boost";
            case "Obese":
                return "https://img.freepik.com/free-photo/3d-rendering-chubby-character-beach_23-2151054526.jpg?uid=R186307674&ga=GA1.1.392089018.1733846059&semt=ais_keywords_boost";
            default:
                return "";

        }
    };

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center">
            <div className="row w-100">
                <div className="col-md-6 mx-auto p-4 bg-dark text-white rounded shadow-lg white-shadow" style={{ boxShadow: "0 4px 10px rgba(255, 255, 255, 0.87)" }}>
                    <h2 className="text-center mb-5 gradient-text">BMI Calculator</h2>
                    <div className="mb-5">
                        <label className="form-label">Weight (kg)</label>
                        <input type="number" className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter your weight" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Height (cm)</label>
                        <input type="number" className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter your height" />
                    </div>

                   <center><button className="button" data-text="Awesome" onClick={calculateBMI}>
                        <span className="actual-text">&nbsp;Calculate&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Calculate&nbsp;</span>
                    </button></center> 
                    {bmi && (
                        <div className="mt-4 text-center">
                            <h3>Your BMI: {bmi}</h3>
                            <h4 className="text-warning">Category: {category}</h4>
                        </div>
                    )}
                </div>
                {bmi && (
                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-center justify-content-center">
                        <img src={getImage()} alt={category} className="img-fluid rounded shadow-lg" style={{ maxWidth: '20rem', height: '30rem' }} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default BMICalculator