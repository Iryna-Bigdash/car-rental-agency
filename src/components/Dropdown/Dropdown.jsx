import { Component } from 'react';
import { Button, Container, Menu } from './Dropdown.styled';
import { CiCircleChevDown, CiCircleChevUp } from 'react-icons/ci';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };
  render() {
    return (
      <Container>
        <Button onClick={this.toggle}>
          {this.state.visible ? (
            <CiCircleChevUp size={30} />
          ) : (
            <CiCircleChevDown size={30} />
          )}
        </Button>
        {this.state.visible && <Menu>SiteBar</Menu>}
      </Container>
    );
  }
}

export default Dropdown;
