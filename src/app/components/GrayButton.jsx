import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

function GrayButton(props) {
    const { buttonName, height, subTitle, Id } = props;
    return (
        <>
            <Stack id={Id} className="typeOfHand" spacing={6} direction="row">

                <Button variant="contained" sx={{
                    paddingTop: height,
                    paddingBottom: height,
                    background: "#2A2437",
                    borderRadius: "3px",
                    border: 0,
                    color: "white",
                    // height: "38px",
                    minWidth: 20,
                    maxWidth: 110,
                    fontSize: 28,
                    fontWeight: 800,
                    fontFamily: "Poppins"

                }}>
                    {buttonName}
                </Button>
                <h6>{subTitle}</h6>
            </Stack>
        </>
    )
}

export default GrayButton