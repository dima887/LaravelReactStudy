import React from 'react';
import http from "../../axios";

const RemoveSpacesForm = ({text, setText, resText, setResText}) => {

    const sendFormRemoveSpaces = (event) => {
        event.preventDefault();

        http.post('api/text/removeSpaces', {
            removeSpaces: text.removeSpaces
        })
            .then((res) => {
                console.log(res)
                setResText({removeSpaces: res.data.text})
            })
            .catch((er) => {
                console.log(er)
            })
    }

    return (
        <div>
            <form>
                <p><span className="text-info">Пример</span>: ехал грека через реку . видит грека в реке рак ? сунул грека руку в реку , рак за руку греку цап !</p>
                <p><span className="text-info">Результат</span>: ехал грека через реку. видит грека в реке рак? сунул грека руку в реку, рак за руку греку цап!</p>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Введите текст</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={e => setText({...text, removeSpaces: e.target.value})}>
                                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Получите результат</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={resText.removeSpaces}
                    >
                                    </textarea>
                </div>
                <button onClick={sendFormRemoveSpaces} type="submit" className="btn btn-primary">Отправить</button>
            </form>
        </div>
    );
};

export default RemoveSpacesForm;