import React, { useState } from "react";
import NavBar from "./NavBar";
import {
   
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Textarea,
  } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Riview.css";
const Reviews = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const handleOpenPopup = () => {
        setPopupOpen(true);
      };
    
      const handleClosePopup = () => {
        setPopupOpen(false);
      };
    
      const handleSubmitReview = () => {
       
        handleClosePopup();
      };
  return (
    <>
      <NavBar />
      <div className="full">
        <div className="write" onClick={handleOpenPopup}><h6>ADD COMMENT</h6>
        </div>
        <div className="temporary">
          <div className="card1">
            <div className="haedtit">
              <div className="avatar">
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  className="siz"
                />
              </div>
              <div className="ratings">
                <img
                  className="iag"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/////wgBmZmb/vgD/wAD/vQBZWVn/8MxgYGD/9+P/7L//8c9jY2NeXl7/9d3//PL/0mD/89b/46H//vj/567/0Ff/yTH/+uv/1Gb/xRD/6riTk5P/3o//4Jbk5OT/xiD/13b/zEXQ0NC3t7eAgID/2oL/7cR4eHioqKibm5v/1nH/02P/2X3/yjb/5aa+vr7w8PDc3Nyurq5N0ROyAAAE+klEQVR4nO3Z13bqOhQF0MgSwhRjOhhMDYGQUJL8/8ddG1OMVdgacMZ9WfPxnDUcaduqvL0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8mbrqkR4vQId3YNxzS4WLk0pTxn0vaRavE2/R0h/Ohw8NnfOaQHnLeoaePUk4dHu5izxijt2QnWIn+6ruc8S453SgxsSOn33yvvqKnXYw4Y+KDmq4kabYgP5ylyOlFEuYVavrT9zy5JD/cRZQ2mw+I6d4pXSWm47SCPCamq2ma9YjpH+l5Xt0jpp20Tw0RxGm2fEoz4hwRZmlOnJRnWbpMS4+Tz8TzgiMt7aIjTg1hpRop3s/S/EBKf2UPF1+k9CGrIOuT0tP0M0mLQko7mZ9rwvaUdPfcbNqk3LqkeYuQ7lweTZuUN/WsJv4nJe1icu0kZfRUr2nWfzweGuzm8UoV9q9hynQ1Drwz+f44TVcZLW6dZCI6tGxvv1Jt5tJMxDVbWQbrXT7Nd2vbLB7WYpFPN6vW1Wd69HzvSq6WP9Z+EjW6HwvG861Om8JFf64rTKUa95S04Hw2bJfVwgzWk2aUPKuYjpoTTWHCcns4K6bTP9aLdYWZHrebQAZ1L6ceSH/1uXxu/5ZsF4uNyLWd7++r0hbWdHTf8jUzptM4W9+lK5G1KaKwwV5JGfh39bjWxQ+k3D5RE0OTL0r3b7PJ7en7Xk7saT65r2DJnr6f5H6krhy3ujyzWamYXmTWycI5rDOzNru4I+vZisKLO7LYWsJZYRwvbUWp+09NKy1LS0rKUhhGlk7OlYcvzBUX6qlgbmlKpExWR0tRnj0Qlo0tKXzcJwNzSXRn5L5xPtFtx4bmomiWqndjUeTvcyVJthqGgcy1p8GKod1CezgxDrbiUMj0DCXUnwb/DEV5xWmwqy2KZiic6AebZiichIaaGDY0+sFm2vxug39VEv0CYd7MrnVFMR4F9YPNuGvTfVd8bUqPfbUkwYs2s31NQ8wb2S/1ZXLzubGtltBymVdT07Zzozp66htSjx/TtNty5tHMypE5HWpqYjkKqAub7cZgrOzaXnZjoA4HoVlzLgZqL223P0rYet3WU2tiOR69K4Pn+TXnbKTWxHIFqVl6bFeQbjVZqDWxHAI/lZoEr7qCbKszhNvYsfTSceyoj3YcO6+6L9ipNbFccXU1vTSnNWu37WJJk7ZcLG2UmrzsYkkdxLY3H2vWHfP3XdX00nxTpBmXwnKxra7F9TGlwwSXXUFyWr9eEj5ei0Uu/XgtFrerAMsd7nUtvqUJa3E9kJeLlJetxedmzA6txmiR7Wq5+Y5wkQXYpNZYf2ct5+YfMj+yAN+VG+VdVkTLBJ7N9oJ/rxu1CcsKZJ7As9vpulwtp9PjRp6q4tO6/MhpGuT78xfdaqb9NG8eTxXk0XmUV+Zp2rJ0f2f1yz67TtbPb2N6kj6Mz89DsRtx6zD+TWriy/H5FLxcpVWRxrSTRknwXu7rT/tpmdmS/9znZoQwTr6CuTHdFzzKj5VDxLWH4sw8+ZLi3LJU3Sd/zZg+Sl9uc1clv+PkH17zw3Fn/1UYKWE8M8+aw15xdWz3zbPmZF8cV6O9+auq9ov7/nLP/EP9z+avcHk03f6j340BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwOI/x6U87iC0Fk4AAAAASUVORK5CYII="
                />
              </div>
            </div>
            <div className="riv">
              <p className="p">
                <span className="que">"</span>
                09NKy1LS0rKUhhGlk7OlYcvzBUX6qlgbmlKpExWR0tRnj0Qlo0tKXzcJwNzSXRn5L5xPtFtx4bmomiWqndjUeTvcyVJthqGgcy1p8GKod1CezgxDrbiUMj0DCXUnwbhjknjfnkjnknsejnfsnnsfkjnjnksenfsjlsnfslnflnlfnslfknsfnlfsnlkfsnklnkls
                <span className="que">"</span>
              </p>
            </div>
          </div>
          <div className="card1">
            <div className="haedtit">
              <div className="avatar">
                <Avatar
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                  className="siz"
                />
              </div>
              <div className="ratings">
                <img
                  className="iag"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAmVBMVEX/////wgBmZmb/vgD/wAD/vQBZWVn/8MxgYGD/9+P/7L//8c9jY2NeXl7/9d3//PL/0mD/89b/46H//vj/567/0Ff/yTH/+uv/1Gb/xRD/6riTk5P/3o//4Jbk5OT/xiD/13b/zEXQ0NC3t7eAgID/2oL/7cR4eHioqKibm5v/1nH/02P/2X3/yjb/5aa+vr7w8PDc3Nyurq5N0ROyAAAE+klEQVR4nO3Z13bqOhQF0MgSwhRjOhhMDYGQUJL8/8ddG1OMVdgacMZ9WfPxnDUcaduqvL0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8mbrqkR4vQId3YNxzS4WLk0pTxn0vaRavE2/R0h/Ohw8NnfOaQHnLeoaePUk4dHu5izxijt2QnWIn+6ruc8S453SgxsSOn33yvvqKnXYw4Y+KDmq4kabYgP5ylyOlFEuYVavrT9zy5JD/cRZQ2mw+I6d4pXSWm47SCPCamq2ma9YjpH+l5Xt0jpp20Tw0RxGm2fEoz4hwRZmlOnJRnWbpMS4+Tz8TzgiMt7aIjTg1hpRop3s/S/EBKf2UPF1+k9CGrIOuT0tP0M0mLQko7mZ9rwvaUdPfcbNqk3LqkeYuQ7lweTZuUN/WsJv4nJe1icu0kZfRUr2nWfzweGuzm8UoV9q9hynQ1Drwz+f44TVcZLW6dZCI6tGxvv1Jt5tJMxDVbWQbrXT7Nd2vbLB7WYpFPN6vW1Wd69HzvSq6WP9Z+EjW6HwvG861Om8JFf64rTKUa95S04Hw2bJfVwgzWk2aUPKuYjpoTTWHCcns4K6bTP9aLdYWZHrebQAZ1L6ceSH/1uXxu/5ZsF4uNyLWd7++r0hbWdHTf8jUzptM4W9+lK5G1KaKwwV5JGfh39bjWxQ+k3D5RE0OTL0r3b7PJ7en7Xk7saT65r2DJnr6f5H6krhy3ujyzWamYXmTWycI5rDOzNru4I+vZisKLO7LYWsJZYRwvbUWp+09NKy1LS0rKUhhGlk7OlYcvzBUX6qlgbmlKpExWR0tRnj0Qlo0tKXzcJwNzSXRn5L5xPtFtx4bmomiWqndjUeTvcyVJthqGgcy1p8GKod1CezgxDrbiUMj0DCXUnwb/DEV5xWmwqy2KZiic6AebZiichIaaGDY0+sFm2vxug39VEv0CYd7MrnVFMR4F9YPNuGvTfVd8bUqPfbUkwYs2s31NQ8wb2S/1ZXLzubGtltBymVdT07Zzozp66htSjx/TtNty5tHMypE5HWpqYjkKqAub7cZgrOzaXnZjoA4HoVlzLgZqL223P0rYet3WU2tiOR69K4Pn+TXnbKTWxHIFqVl6bFeQbjVZqDWxHAI/lZoEr7qCbKszhNvYsfTSceyoj3YcO6+6L9ipNbFccXU1vTSnNWu37WJJk7ZcLG2UmrzsYkkdxLY3H2vWHfP3XdX00nxTpBmXwnKxra7F9TGlwwSXXUFyWr9eEj5ei0Uu/XgtFrerAMsd7nUtvqUJa3E9kJeLlJetxedmzA6txmiR7Wq5+Y5wkQXYpNZYf2ct5+YfMj+yAN+VG+VdVkTLBJ7N9oJ/rxu1CcsKZJ7As9vpulwtp9PjRp6q4tO6/MhpGuT78xfdaqb9NG8eTxXk0XmUV+Zp2rJ0f2f1yz67TtbPb2N6kj6Mz89DsRtx6zD+TWriy/H5FLxcpVWRxrSTRknwXu7rT/tpmdmS/9znZoQwTr6CuTHdFzzKj5VDxLWH4sw8+ZLi3LJU3Sd/zZg+Sl9uc1clv+PkH17zw3Fn/1UYKWE8M8+aw15xdWz3zbPmZF8cV6O9+auq9ov7/nLP/EP9z+avcHk03f6j340BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwOI/x6U87iC0Fk4AAAAASUVORK5CYII="
                />
              </div>
            </div>
            <div className="riv">
              <p className="p">
                <span className="que">"</span>
                09NKy1LS0rKUhhGlk7OlYcvzBUX6qlgbmlKpExWR0tRnj0Qlo0tKXzcJwNzSXRn5L5xPtFtx4bmomiWqndjUeTvcyVJthqGgcy1p8GKod1CezgxDrbiUMj0DCXUnwbhjknjfnkjnknsejnfsnnsfkjnjnksenfsjlsnfslnflnlfnslfknsfnlfsnlkfsnklnkls
                <span className="que">"</span>
              </p>
            </div>
          </div>
          <Modal isOpen={isPopupOpen} onClose={handleClosePopup} size="lg" motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent
             style={{
                position: "fixed",
                right: "10px",
                height:"60%",
                width:"30%",
                bottom: "10px",
              }}
            >
              <ModalHeader>Add Review</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Textarea
                  placeholder="Write your review here..."
                  size="sm"
                  resize="none"
                  style={{
                height:"100%",
                fontSize:"20px"
              }}
                />
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmitReview}>
                  Submit
                </Button>
                <Button onClick={handleClosePopup}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Reviews;
