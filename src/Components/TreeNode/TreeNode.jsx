import React from 'react';

const TreeNode = ({ node }) => {
  const { name, price, children, head } = node;

  return (
    <div>
      {price === 0.0 ? <h2>{name}</h2> : <p>{name} - {price} руб.</p>}
      {children && (
        <div style={{ marginLeft: 20 }}>
          {children.map((child) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;