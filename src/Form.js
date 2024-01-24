import { useState, React } from "react";
import './Form.css';

function Form() {
	const [name, setName] = useState('')
	const [peperoni, setPeperoni] = useState(false)
	const [sausage, setSausage] = useState(false)
	const [peppers, setPeppers] = useState(false)
	const [onions, setOnions] = useState(false)

	return (
		<div className="container">
			<div className="inputs">
				<label>
					<input
						value={name}
						placeholder="Your name"
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					<input
						type="checkbox"
						checked={peperoni}
						onChange={() => setPeperoni(!peperoni)}
					/>
					Peperoni
				</label>
				<label>
					<input
						type="checkbox"
						checked={sausage}
						onChange={() => setSausage(!sausage)}
					/>
					Sausage
				</label>
				<label>
          <input
            type="checkbox"
            checked={peppers}
            onChange={() => setPeppers(!peppers)}
          />
          Peppers
        </label>
				<label>
          <input
            type="checkbox"
            checked={onions}
            onChange={() => setOnions(!onions)}
          />
          Onions
        </label>
			</div>

			<div className="outputs">
				<h2>Your Order</h2>
				<div className="customer-name"> {name} </div>
				{peperoni && <div>Pepperoni</div>}
				{sausage && <div>Sausage</div>}
				{peppers && <div>Peppers</div>}
				{onions && <div>Onions</div>}
			</div>
		</div>
	)
}

export default Form