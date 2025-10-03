// @ts-nocheck

export const BaseComponent = ({num, children}) => {
    return (
      <div className="p-4 border rounded-sm">
        <p className="text-2xl"> I am Component Number: {num}</p>

        {children}
      </div>
    )
}

