#include<iostream>
using namespace std;

class Node
{
    public:
    int price;
    int height;
    Node* left;
    Node* right;

    Node(int price, int key) : price(price), key(key), left(nullptr), right(nullptr) {}    
};

class AVL
{
    public:
    Node* root;

    AVL() : root(nullptr) {}

    int height(Node* node)
    {
        return max(height(node->left), height(node->right));
    }

    int getbalance(Node* node)
    {
        return height(node->left)-height(node->right);
    }

    Node* rotateRight(Node* y)
    {
        Nde* x = y->left;
        Node* temp = x->right;

        x->right = y;
        y->left = temp;

        x->height = max(height(node->left), height(node->right));
        y->heigth = max(height(node->left), height(node->right));
    }

        Node* rotateRight(Node* y)
    {
        Nde* x = y->right;
        Node* temp = x->left;

        x->left = y;
        y->right = temp;

        x->height = max(height(node->left), height(node->right));
        y->heigth = max(height(node->left), height(node->right));
    }

    void insert(int price)
    {
        root = insert(root, price);
    }

    Node* insert(Node* node, int key)
    {
        if(node == nullptr)
        {
            return new Node(key);
        }

        if(node->key > key)
        {
            node->left = insert(node->left, key);
        }
        else if(node->key > key)
        {
            node->right = insert(node->right, key);
        }
        
        int height = 1 + max(height(node->left), height(node->right));
        int balance = getBalance(node);

        if(balance > 1 && (node->left)->key > key)
        {
            return rightRotate(node-);
        }
        if(balance < -1 && (node->right)->key < key)
        {
            return leftRotate(node);
        }
        if(balance > 1 && (node->left)->key < key)
        {
            node->left = leftRotate(node);
            return rightRotate(node);
        }
        if(balance < -1 && (node->right)->key > key)
        {
            node->right = rightRotate(node);
            return leftRotate(node);
        }

        return node;
    }

    Node* findMin(Node* node)
    {
        if(node->left == nullptr)
        {
            return node;
        }

        return findMin(node->left);
    }

    void Delete(int price)
    {
        root = Delete(root, price);
    }

    Node* Delete(Node* node, int key)
    {
        if(node == nullptr)
        {
            return node;
        }

        if(node->left > key)
        {
            node->left = Delete(node->left, key);
        }
        else if(node->right < key)
        {
            node->right = Delete(node->right, key);
        }
        else 
        {
            if(node->left == nullptr && node->right == nullptr)
            {
                delete node;
                return nullptr;
            }
            else if(node->left == nullptr)
            {
                Node* temp = node->right;
                node* = *temp;
                delete temp;
            }
            else if(node->right == nullptr)
            {
                Node* temp = node->left;
                node* = *temp;
                delete temp;
            }
            else
            {
                Node* temp = findMin(node->right);
                node->key = temp->key;
                node->right = Delete(node->right, temp->key);
            }
        }

        int height = 1 + max(height(node->left), height(node->right));
        int balance = getBalance(node);

        if(balance > 1 && getbalance(node->left) >= 0)
        {
            rigthRotate(node);
        }
        if(balance < -1 && getbalance(node->right) <= 0)
        {
            leftRotate(node);
        }
        if(balance > 1 && getbalance(node->left) < 0)
        {
            node->left = leftRotate(node->left);
            rigthRotate(node);
        }
        if(balance < -1 && getbalance(node->right) > 0)
        {
            node->right = rightRotate(node->right);
            leftRotate(node);
        }

        return node;
    }

    void SearchNearest(int target)
    {
        int diff = target - root->price;
        Node* nearest = root;
        nearest = SearchNearest(nearest, target, diff);
        cout << "Nearest price to " << target << " is: " << nearest->price << endl;
    } 

    Node* SearchNearest(Node* node , int target, int& diff)
    {
        if(node == nullptr)
        {
            return node;
        }

        if((target - node->price) < diff)
        {
            diff = target - node->price;
            return node; //Hence we have a new nearest node
        }
        else
        {
            node->left = SearchNearest(node->left, target, diff);
            node->right = SearchNearest(node->right, target, diff);
        }
    }

};


int main()
{
    int target, prices[6] = {100, 150, 200, 300, 350, 400};
    AVL tree;

    cout << "Enter your target budget: ";
    cin >> target;

    for(int i=0; i<6; i++)
    {
        tree.insert(prices[i]);
    }

    tree.SearchNearest(target);
    
    return 0;
}