import React, { useEffect, useState } from 'react'
import Collapse from '../Components/Collapse'
import { streetApi, houseApi, familyApi, memberApi } from '../utlis/api'
import Drawer from '../Components/Drawer'
import Input from '../Components/Input'
import Select from '../Components/Select'
import Button from "../Components/Button"


export default function Home() {
    const [ members, setMembers ] = useState([])
    const [ families, setFamilies ] = useState([])
    const [ houses, setHouses ] = useState([])
    const [ streets, setStreets ] = useState([])

    const [ streetData, setStreetData ] = useState({
        name: "",
        ward_no: 1,
        street_no: 1,
        mark: ""
    })
    const [ houseData, setHouseData ] = useState({
        house_no: 1,
        street_id: 13,
        mark: "gurudwara"
    })

    useEffect(() => {
        memberApi.fetch().then(data => setMembers(data));
        familyApi.fetch().then(data => setFamilies(data));
        houseApi.fetch().then(data => setHouses(data));
        streetApi.fetch().then(data => setStreets(data));
    }, [ 0 ])
    // console.clear()
    // console.log({ members })
    // console.log({ families })
    console.log(streets)

    const streetOptions = []

    streets.map(({ name, id }) =>
        streetOptions.push({
            label: name,
            value: id
        })
    )

    const inputs = {
        street: [
            {
                label: "Street Name",
                placeholder: "abc street name",
                value: streetData.name,
                onChange: e => setStreetData({ ...streetData, name: e.target.value })
            },
            {
                label: "Ward number",
                placeholder: "22",
                value: streetData.ward_no,
                type: "number",
                onChange: e => setStreetData({ ...streetData, ward_no: e })
            },
            {
                label: "Street number",
                placeholder: "65",
                type: "number",
                value: streetData.street_no,
                onChange: e => setStreetData({ ...streetData, street_no: e })
            },
            {
                label: "mark",
                placeholder: "near temple...",
                value: streetData.mark,
                onChange: e => setStreetData({ ...streetData, mark: e.target.value }),
                optional: true
            },
        ],
        house: [
            {
                label: "House number",
                placeholder: 335,
                type: "number",
                value: houseData.house_no,
                onChange: e => setHouseData({ ...houseData, house_no: e })
            },
            {
                label: "Street",
                component: "select",
                options: streetOptions,
                value: houseData.street_id,
                onChange: e => setHouseData({ ...houseData, street_id: e.value })
            },
            {
                label: "mark",
                placeholder: "near temple...",
                value: streetData.mark,
                onChange: e => setHouseData({ ...houseData, mark: e.target.value }),
                optional: true
            },
        ],
        member: [ {} ],
    }

    console.log(houseData)


    const insert = {
        street: () => streetApi.insert(streetData),
        house: () => console.log("add House"),
    }

    return (
        <div>
            <Drawer title="Add new Street" >
                {inputs.street.map(({ label, placeholder, onChange, value, optional, type, component, options }) => (
                    component === "select" ? <Select label="Select Street" onChange={onChange} defaultValue={value} options={options} /> :
                        <Input key={label} label={label} placeholder={placeholder} type={type} value={value} onChange={onChange} optional={optional} />
                ))}
                <Button label="Add New Street" onClick={insert.street()} />
            </Drawer>
            <Drawer title="Add new House" >
                {inputs.house.map(({ label, placeholder, onChange, value, optional, type, component, options }) => (
                    component === "select" ? <Select label="Select Street" onChange={onChange} defaultValue={value} options={options} /> :
                        <Input key={label} label={label} placeholder={placeholder} type={type} value={value} onChange={onChange} optional={optional} />
                ))}
                <Button label="Add New House" onClick={insert.house()} />
            </Drawer>

            {streets.map(({ name, ward_no, street_no, mark }) =>
                <Collapse title={name} >
                    <p>Street name: {name}</p>
                    <p>Ward number : {ward_no}</p>
                    <p>Street number : {street_no}</p>
                    <p>mark: {mark}</p>

                </Collapse>
            )}





        </div>
    )
}


//      "id": "13",
//      "name": "Hakkam Singh",
//      "ward_no": 22,
//      "mark": "",
//      "street_no": "15"


//  "id": "11",
//  "house_no": 1,
//  "street_id": "13",
//  "mark": "gurudwara" 