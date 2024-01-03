import { useEffect, useState } from "react";
import Api, { authApi, endpoints } from "../configs/Api";
import MySpinner from "../layout/MySpinner";
import { Link, useSearchParams } from "react-router-dom";
import StyleU from "./userDetail.module.css"
import { Card, Col, Row } from "react-bootstrap";

const OwnStore = () =>{

    const [user, setUser] = useState(null)
    const [storeID] = useSearchParams()
    const [foods, setFoods] = useState(null)

    useEffect(() => {
        const loadUser = async () => {
            try {
                let { data } = await authApi().get(endpoints['current-user']);
                setUser(data)
            }
            catch (ex) {
                console.error(ex)
            }
        }
        loadUser()
    }, [])

    

    useEffect(() => {
        const loadFoods = async () => {
            try {
                
                let { data } = await Api.get(endpoints['own-store-foods'](storeID));
                setFoods(data);
            }
            catch (ex) {
                console.error(ex);
            }
        };

        loadFoods();
    }, []);

    if (user === null)
        return <MySpinner />

    if(storeID === null)
        return <MySpinner/>    

    if(foods === null)
        return <MySpinner />

    let urlmail = `mailto:${user.email}`

    console.log(foods)

    return (
        <>

            <h1 style={{ textAlign: 'center' }}>Profile User</h1>
            <div className="row justify-content-around mt-5 user-info">
                <div className="col-12 col-md-3">
                    <figure className="avatar avatar-profile">
                        <img className={StyleU.imagee} src={user.storeId.imgfoodstore} alt={user.userId} />
                    </figure>
                    <Link style={{ marginLeft: "90px" }} className="btn btn-primary btn-block my-2">
                        Edit Profile
                    </Link>
                </div>

                <div className="col-12 col-md-5">
                    <h4>Store Name</h4>
                    <p>{user.storeId.name}</p>

                    <h4>Email Address</h4>
                    <p>{user.storeId.location}</p>

                    <h4>Phone</h4>
                    <p>{user.phone}</p>

                    <button className={StyleU.button}><a href={urlmail}>Contact</a></button>
                </div>
            </div>
            <hr/>

         
        </>
    )
}
export default OwnStore;
{/* <Row>
{foods.map(f => (
    <Col xs={12} md={4} className="mt-2" key={f.foodId}>
        <Card style={{ width: '286px', height: '450px', alignItems: 'center' }}>
            <Card.Img variant="top" src={f.imgfood} style={{ width: '280px', height: '286px' }} />
            <Card.Body style={{ textAlign: 'left' }}>
                <Card.Title>{f.name}</Card.Title>
                <Card.Text>{f.price}</Card.Text>
                <Link to={`/listfoods/${f.foodId}`} className="btn btn-info" style={{ marginRight: "5px" }} variant="primary">
                    Xem chi tiết
                </Link>
            </Card.Body>
        </Card>
    </Col>
))}
</Row> */}