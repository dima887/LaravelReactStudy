import React, {useContext, useState} from 'react';
import NumberOnDigitForm from "../copmonents/forms/NumberOnDigitForm";
import RemoveSpacesForm from "../copmonents/forms/RemoveSpacesForm";
import RemoveDuplicateWordsForm from "../copmonents/forms/RemoveDuplicateWordsForm";
import {AuthContext} from "../context";
import WelcomeTextSection from "../copmonents/section/WelcomeTextSection";

const TextPage = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [text, setText] = useState({numberOnDigit: '', removeSpaces: '', removeDuplicateWords: ''});
    const [resText, setResText] = useState({numberOnDigit: '', removeSpaces: '', removeDuplicateWords: ''});
    const [error, setError] = useState({numberOnDigit: '', removeSpaces: '', removeDuplicateWords: ''});

    return (
        <div>
            {!isAuth
                ?
                <WelcomeTextSection/>
                :
                <div className="container">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                    Разбить число на разряды. 10000000 => 10.000.000
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <NumberOnDigitForm text={text} setText={setText} resText={resText} setResText={setResText} error={error} setError={setError}/>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                    Удалить пробелы перед знаками препинания. [.,?!]
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <RemoveSpacesForm text={text} setText={setText} resText={resText} setResText={setResText}/>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                    Удалить повторяющиеся слова
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                 aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    <RemoveDuplicateWordsForm text={text} setText={setText} resText={resText} setResText={setResText}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default TextPage;