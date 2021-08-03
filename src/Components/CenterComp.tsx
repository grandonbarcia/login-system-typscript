import React, { FC } from 'react'
import { Row, Col } from 'react-bootstrap'

const CenterComp: FC = ({ children }) => {

    return (
        <Row className='justify-content-center h-50'>
            <Col className='align-self-center' xl={'4'}>
                {children}
            </Col>
        </Row>
    )
}




export default CenterComp