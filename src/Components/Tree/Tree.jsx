import TreeNode from "../TreeNode/TreeNode";

const Tree = ({data}) => {
    const buildTree = (services, parentId = null) => {
        const nodes = services
          .filter((service) => service.head === parentId)
          .sort((a, b) => a.sorthead - b.sorthead);
    
        return nodes.map((node) => {
          const children = buildTree(services, node.id);
          return {
            ...node,
            children,
          };
        });
      };
    
      const tree = buildTree(data.services);
    
      return (
        <div>
          {tree.map((node) => (
            <TreeNode key={node.id} node={node} />
          ))}
        </div>
      );
}
 
export default Tree;