import React from 'react';
import { Container, Text, Break, Button, Input } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
	return (
		<Button {...restProps}>
			{children}
			<img src='/images/icons/chevron-right.png' alt='Try Now' />
		</Button>
	);
};

OptForm.Input = function OptFormInput({ ...restProps }) {
	return <Input {...restProps} />;
};

OptForm.Break = function OptFormBreak({ children, ...restProps }) {
	return <Break {...restProps} />;
};
