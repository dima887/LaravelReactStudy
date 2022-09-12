import React from 'react';
import http from "../../axios";

const NumberOnDigitForm = ({text, setText, resText, setResText, error, setError}) => {

    const sendFormNumberOnDigit = (event) => {
        event.preventDefault();

        http.post('api/text/numberOnDigit', {
            number: text.numberOnDigit
        })
            .then((res) => {
                console.log(res)
                setResText({numberOnDigit: res.data.digit})
                setError({numberOnDigit: ''})
            })
            .catch((er) => {
                console.log(er.response.data.message)
                setError({numberOnDigit: er.response.data.message})
            })

    }

    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Введите число</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputText"
                        aria-describedby="emailHelp"
                        onChange={e => setText({...text, numberOnDigit: e.target.value})}
                    />
                    {error.numberOnDigit
                        ?
                        <div id="emailHelp" className="form-text text-danger">{error.numberOnDigit}</div>
                        :
                        ''
                    }
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputText" className="form-label">Получите результат</label>
                    <input
                        type="text"
                        value={resText.numberOnDigit}
                        className="form-control"
                        id="exampleInputText"
                        aria-describedby="emailHelp"
                    />
                </div>
                <button onClick={sendFormNumberOnDigit} type="submit" className="btn btn-primary">Отправить</button>
            </form>
        </div>
    );
};

export default NumberOnDigitForm;