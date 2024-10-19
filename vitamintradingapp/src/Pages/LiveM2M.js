import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import '../CssFiles/M2MBoard.css';

function LiveM2M() {
    return (
            <Card className="M2MCard" style={{marginTop:'4%'}}>
                <Card.Header className="CardBadge"><span style={{color:'white',fontSize:'23px',fontWeight:400}}>Live M2M under: ACCOUNT2</span></Card.Header>
                <Card.Body style={{marginTop:'0.5%'}}>
                    <Table style={{backgroundColor:'rgba(32, 41, 64, 0.5)'}}>
                        <thead >
                            <tr >
                                <th>User ID</th>
                                <th>Active Profit/Loss</th>
                                <th>Active Trades</th>
                                <th >Margin Used</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >Total</td>
                                <td ><strong>344837</strong></td>
                                <td><strong>165</strong></td>
                                <td><strong>393006</strong></td>
                            </tr>
                            <tr>
                                <td><span className="badge Badgestyle">1 : AS001</span></td>
                                <td>-203</td>
                                <td>1</td>
                                <td>35</td>
                            </tr>
                            <tr>
                                <td><span className="badge Badgestyle">2 : HMSR001</span></td>
                                <td>-269704</td>
                                <td>26</td>
                                <td>49069</td>
                            </tr>
                            <tr>
                                <td><span className="badge Badgestyle">3 : SR001</span></td>
                                <td>812980</td>
                                <td>67</td>
                                <td>166580</td>
                            </tr>
                            <tr>
                                <td><span className="badge Badgestyle">4 : UM002</span></td>
                                <td>2042</td>
                                <td>4</td>
                                <td>3635</td>
                            </tr>
                            <tr>
                                <td><span className="badge Badgestyle">5 : self0</span></td>
                                <td>-8944</td>
                                <td>53</td>
                                <td>143470</td>
                            </tr>
                            <tr>
                                <td><span className="badge Badgestyle">6 : vsr001</span></td>
                                <td>-191334</td>
                                <td>14</td>
                                <td>30217</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
    );
}

export default LiveM2M;
