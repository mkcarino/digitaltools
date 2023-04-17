'use client';
import Button from 'react-bootstrap/Button';

import "bootstrap/dist/css/bootstrap.min.css";
import Select from 'react-select'
import { useState } from "react";

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { livello1, livello2, livello3 } from '../public/data-source'

const HomePage = () => {
    const [lvl1, setLvl1] = useState(null);
    const [lvl1Id, setLvl1Id] = useState([]);
    const [lvl2, setLvl2] = useState([]);
    const [lvl3, setLvl3] = useState(null);
    const [lvl4, setLvl4] = useState(null);
    const [lvl5, setLvl5] = useState(null);
    const [lvl6, setLvl6] = useState(null);
    const [lvl7, setLvl7] = useState(null);
    const [lvl8, setLvl8] = useState(null);
    const [lvl9, setLvl9] = useState(null);
    const [titoloL4, setT4] = useState("Livello 4");
    const [titoloL5, setT5] = useState("Livello 5");
    const [titoloL6, setT6] = useState("Livello 6");
    const [titoloL7, setT7] = useState("Livello 7");
    const [titoloL8, setT8] = useState("Livello 8");
    const [titoloL9, setT9] = useState("Livello 9");
    const [medicacode, setMediacode] = useState("");
    const [formData, setFormData] = useState({
        livello4: '',
        livello5: '',
        livello6: '',
        livello7: '',
        livello8: '',
        livello9: ''
    })
    const [isMcValid, setMcValid] = useState(false);
 
    const handleLvl1Change = value => {
        setLvl1(value.value)
        setLvl2([])
        setLvl3([])
        setLvl1Id(value.id)
        setT4("Livello 4")
        setT5("Livello 5")
        setT6("Livello 6")
        setT7("Livello 7")
        setT8("Livello 8")
        setT9("Livello 9")
        console.log('Optionselected: ', value.value)
    }
    const handleLvl2Change = value => {
        console.log('Optionselected: ', value.value)
        setLvl2(value)
        setLvl3([])
        if (value.value == "social" || value.value == "search") {
            setT4("Tipo Annuncio")
            setT5("Nome Prodotto")
            setT6("Audience Type")
            setT7("Nome Campagna")
            setT8("Unita business")
            setT9("Agency")
        }
        if (value.value == "display") {
            setT4("Tipo Annuncio")
            setT5("Nome Prodotto")
            setT6("Audience Type")
            setT7("Nome Campagna")
            setT8("Unita business")
            setT9("Agency")
        }
        if (value.value == "cta") {
            setT4("Posizione")
            setT5("Nome Prodotto")
            setT6("Audience Type")
            setT7("Nome Campagna")
            setT8("Unita business")
            setT9("Agency")
        }
        if (value.value == "dem") {
            setT4("Campo Vuoto")
            setT5("Nome Prodotto")
            setT6("Audience Type")
            setT7("Nome Campagna")
            setT8("Unita business")
            setT9("Agency")
        }
        if (value.value == "stampa") {
            setT4("QR o Link")
            setT5("Nome Prodotto")
            setT6("Audience Type")
            setT7("Nome Campagna")
            setT8("Unita business")
            setT9("Agency")
        }
        if (value.value == "dem") {
            setT4("Campo Vuoto")
            setT5("Nome Prodotto")
            setT6("Audience Type")
            setT7("Nome Campagna")
            setT8("Unita business")
            setT9("Agency")
        }
    }
    const handleLvl3Change = value => {
        setLvl3(value)
        console.log('Optionselected: ', value.value)
    }

    const filteredOptionslvl2 = livello2.filter((o) => o.link.includes(lvl1Id))
    const filteredOptionslvl3 = livello3.filter((o) => o.link.includes(lvl2.value))
    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [key]: value })
    }
    const handleSubmit = (event) => {
        setLvl4(formData.livello4)
        event.preventDefault();
        const mc = `${lvl1}${lvl2.value}.${lvl3.value}.${formData.livello4}.${formData.livello5}.${formData.livello6}.${formData.livello7}.${formData.livello8}.${formData.livello9}`
        setMediacode(mc)
        setMcValid(true)
    };
    function copyText() {

        let text = mediacode.innerHTML;
        navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
        showSnackBar()
    }
    function showSnackBar() {
        var sb = document.getElementById("snackbar");
    
        //this is where the class name will be added & removed to activate the css
        sb.className = "show";
    
        setTimeout(() => { sb.className = sb.className.replace("show", ""); }, 3000);
    }
    return (
        <div class="container-fluid">
            <div class="row" id="">
                <div class="col-2 box min-vh-100" id="">

                    <div class="row my-3">
                        <h1 class="text-light">Digital Tools</h1>
                    </div>
                    <div class="row mt-5">
                        <h5 class="text-light">Mapp MC URL Builder</h5>
                    </div>
                    <div class="row my-3">
                        <h5 class="text-light">Mapp List Parameter</h5>
                    </div>

                    <div class="row ">
                        <div class="col-2 fixed-bottom"><img class="col-8 m-2" src="/ilsole24ore-o-2021.svg" />
                            <div class="row m-1"><h6 class="text-light">Digital tools made by Softlab <br /> Sponsored by MB</h6></div>
                        </div>
                    </div>


                </div>
                <div class="col-10 box2 min-vh-100">
                    <div class="container-fluid">
                        <div class="row mb-lg-5 mt-lg-2 my-5 justify-content-start">
                            <div class="col my-5" id="title">
                                <h1 class="display-4">MAPP MC URL Builder</h1>
                            </div>
                        </div>
                        <div class="container-fluid">
                            <Form onSubmit={handleSubmit}>
                                <div class="row mb-lg-5  justify-content-start">

                                    {/* <div class="col1">
                                        <h5>Base URL:</h5>
                                    </div> */}
                                    <Form.Label>Base URL</Form.Label>
                                    <InputGroup>
                                        <InputGroup.Text id="basic-addon1">URL di partenza:</InputGroup.Text>
                                        <Form.Control
                                            placeholder="(Opzionale)"

                                        />
                                    </InputGroup>
                                </div>
                                <div class="row mb-lg-5">
                                    <div class="col ">
                                        {/* <label for="exampleInputEmail1" class="form-label">
                                            <h5>Livello 1*</h5>
                                        </label> */}
                                        <Form.Label>Livello 1*</Form.Label>
                                        <Select
                                            options={livello1}
                                            onInvalid={e => e.target.setCustomValidity('Scegline uno')}
                                            isSearchable
                                            onChange={handleLvl1Change}
                                            placeholder="Livello1*"
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </div>
                                    <div class="col">
                                        {/* <label for="exampleInputEmail1" class="form-label">
                                            <h5>Livello 2*</h5>
                                        </label> */}
                                        <Form.Label>Livello 2*</Form.Label>
                                        <Select options={filteredOptionslvl2}
                                            isSearchable
                                            onChange={handleLvl2Change}
                                            onInvalid={e => e.target.setCustomValidity('Scegline uno')}
                                            placeholder="Livello2*"
                                            value={lvl2}
                                            required
                                        />
                                    </div>
                                    <div class="col">
                                        {/* <label for="exampleInputEmail1" class="form-label">
                                            <h5>Livello 3*</h5>
                                        </label> */}
                                        <Form.Label>Livello 3*</Form.Label>
                                        <Select options={filteredOptionslvl3}
                                            isSearchable
                                            onChange={handleLvl3Change}
                                            onInvalid={e => e.target.setCustomValidity('Scegline uno')}
                                            placeholder="Livello3*"
                                            value={lvl3}
                                            required />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                        </Form.Control.Feedback>
                                    </div>
                                </div>
                                <div class="row mb-lg-5">
                                    <div class="col">
                                        {/* <label for="exampleInputEmail1" class="form-label">
                                            <h5 id="titleL4">{titoloL4}</h5>
                                        </label> */}
                                        <Form.Label>{titoloL4}</Form.Label>

                                        <Form.Control
                                            name="livello4"
                                            onChange={handleChange}
                                            type="text"
                                            pattern="[^.]+"
                                            onInvalid={e => e.target.setCustomValidity('Avrai mica inserito un punto')}
                                        />


                                    </div>
                                    <div class="col">
                                        <Form.Label>{titoloL5}</Form.Label>

                                        <Form.Control
                                            name="livello5"
                                            onChange={handleChange}
                                            type="text"
                                            pattern="[^.]+"
                                            onInvalid={e => e.target.setCustomValidity('Avrai mica inserito un punto')}
                                        />
                                    </div>
                                    <div class="col">
                                        <Form.Label>{titoloL6}</Form.Label>

                                        <Form.Control
                                            name="livello6"
                                            onChange={handleChange}
                                            type="text"
                                            pattern="[^.]+"
                                            onInvalid={e => e.target.setCustomValidity('Avrai mica inserito un punto')}
                                        />
                                    </div>

                                    <div class="col">
                                        <Form.Label>{titoloL7}</Form.Label>

                                        <Form.Control
                                            name="livello7"
                                            onChange={handleChange}
                                            type="text"
                                            pattern="[^.]+"
                                            onInvalid={e => e.target.setCustomValidity('Avrai mica inserito un punto')}
                                        />
                                    </div>

                                    <div class="col">
                                        <Form.Label>{titoloL8}</Form.Label>

                                        <Form.Control
                                            name="livello8"
                                            onChange={handleChange}
                                            type="text"
                                            pattern="[^.]+"
                                            onInvalid={e => e.target.setCustomValidity('Avrai mica inserito un punto')}
                                        />
                                    </div>

                                    <div class="col">
                                        <Form.Label>{titoloL9}</Form.Label>

                                        <Form.Control
                                            name="livello9"
                                            onChange={handleChange}
                                            type="text"
                                            pattern="[^.]+"
                                            onInvalid={e => e.target.setCustomValidity('Avrai mica inserito un punto')}
                                        />
                                    </div>
                                    <div class="row mt-lg-5">
                                        <div class="col-6">
                                            <span class="row">*Campi obbligatori</span>
                                            <Button type="submit">Genera Parametro</Button>
                                            
                                        </div>
                                    </div>


                                </div>
                            </Form>
                        </div>
                        {isMcValid ? <div class="row mb-lg-5" id="result">
                            <div class="row mb-lg-5">
                                <h2 id="mediacode">{medicacode}</h2>
                            </div>
                            <div class="col-4"><Button variant='success' onClick={copyText}>Copia</Button>
                                <span id="snackbar">Copiato!</span>
                            </div>
                        </div> : ""}
                        

                    </div>
                

                </div>
            </div>
            
        </div>
    )
}

export default HomePage