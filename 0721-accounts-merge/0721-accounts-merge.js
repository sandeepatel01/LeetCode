/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const parent = {};
    const rank = {};
    
    // Find with path compression
    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };
    
    // Union by rank
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    };
    
    const emailToName = {};
    
    // Initialize parent and rank for each email
    for (const account of accounts) {
        const name = account[0];
        for (let i = 1; i < account.length; i++) {
            const email = account[i];
            if (!parent[email]) {
                parent[email] = email;
                rank[email] = 0;
            }
            emailToName[email] = name;
            if (i > 1) {
                union(account[1], email);
            }
        }
    }
    
    const rootToEmails = {};
    for (const email in parent) {
        const root = find(email);
        if (!rootToEmails[root]) {
            rootToEmails[root] = [];
        }
        rootToEmails[root].push(email);
    }
    
    const result = [];
    for (const root in rootToEmails) {
        const emails = rootToEmails[root];
        emails.sort();
        result.push([emailToName[root], ...emails]);
    }
    
    return result;
};