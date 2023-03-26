export function SpreadProps<P>(props: React.PropsWithChildren<{ props: P }>) {
	return (
		<>
			{(props.children as any[]).map(x => ({
				...x,
				...{ props: { ...x.props, ...props.props } }
			}))}
		</>
	);
}
