import React from 'react';
import http from "../../axios";

const RemoveDuplicateWordsForm = ({text, setText, resText, setResText}) => {

    const sendFormRemoveDuplicateWords = (event) => {
        event.preventDefault();

        http.post('api/text/removeDuplicateWords', {
            removeDuplicateWords: text.removeDuplicateWords
        })
            .then((res) => {
                console.log(res)
                setResText({removeDuplicateWords: res.data.text})
            })
            .catch((er) => {
                console.log(er)
            })
    }
    return (
        <div>
            <form>
                <p><span className="text-info">Пример</span>: one two three two two <br/>
                    bmw audi bmw toyota <br/>
                    dima <br/>
                    dima <br/>
                    name <br/>
                    dima <br/>
                    name</p>
                <p><span className="text-info">Результат</span>: one three two <br/>
                    audi bmw toyota <br/>
                    dima <br/>
                    name</p>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Введите текст</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={e => setText({...text, removeDuplicateWords: e.target.value})}>
                                    </textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Получите результат</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        value={resText.removeDuplicateWords}
                    >
                                    </textarea>
                </div>
                <button onClick={sendFormRemoveDuplicateWords} type="submit" className="btn btn-primary">Отправить</button>
            </form>
        </div>
    );
};

export default RemoveDuplicateWordsForm;