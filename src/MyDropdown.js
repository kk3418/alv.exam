import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export default function MyDropdown() {
  return (
      <div className="dropdown">
        <DropdownButton 
            as='ButtonGroup'
            drop='down'
            title='Single drop down'
            variant='secondary'
        >
            <Dropdown.Item eventKey="1">
                item A
                </Dropdown.Item>
            <Dropdown.Item eventKey="2">
                item B
                </Dropdown.Item>
            <Dropdown.Item eventKey="3">
                item C
                </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">
                item D
            </Dropdown.Item>
        </DropdownButton>

      </div>
  );
}