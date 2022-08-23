const LB = ( {value} ) => {
    const lb_value = () => {
        let ret = 20 * 2.20462
        for (let i = 0; i < value.length; i++) {
          ret += 2 * value[i] * 2.20462 
        }
        console.log("fdsfsd")
        return String(Math.round(100 * ret) / 100) + " LBS"
    }

    if (value.length === 0) {
        return (
            <div>

            </div>
        )
    }

    else {
        return (
            <p className = 'lb_weight'> {lb_value()} </p>
        )
    }

}

export default LB