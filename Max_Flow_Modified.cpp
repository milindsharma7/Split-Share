#include <bits/stdc++.h>
using namespace std;

class Dinic_Max_Flow_Modified{
private:
    vector <vector <long long int>> graph;
    vector <vector <long long int>> Cap;
    vector <vector <long long int>> Residual;
    vector <long long int> Level;
    long long int n;
public:
    Dinic_Max_Flow_Modified(vector <vector <long long int>> graph,vector <vector <long long int>> Cap,long long int n){
        this->n = n;
        this->graph = graph;
        this->Cap = Cap;
    }
    void findLevel(long long int source){
        Level = vector <long long int> (n+1,-1);
        Level[source] = 0;
        queue <long long int> q;
        q.push(source);
        while(!q.empty()){
            long long int node = q.front();
            q.pop();
            for(long long i=1;i<=n;i++){
                if(Level[i] == -1 && Residual[node][i] > 0 && graph[node][i] == 1){
                    Level[i] = Level[node] + 1;
                    q.push(i);
                }
            }
        }
    }
    pair <long long int,vector <vector<long long int>>> maxFlow(long long int source,long long int sink){
        Residual = Cap;
        long long flow = 0;
        vector <long long int> parent(n+1);
        function <bool(long long int)> dfs = [&](long long int node){
            if(node == sink){
                parent[sink] = node;
                return true;
            }
            bool ok = false;
            for(long long int i=1;i<=n;i++){
                if(graph[node][i] == 1 && Level[i] == Level[node] + 1 && Residual[node][i] > 0){
                    if(dfs(i)){
                        parent[i] = node;
                        ok = true;
                    }
                }
            }
            return ok;
        };
        while(true){
            findLevel(source);
            if(Level[sink] == -1){
                break;
            }
            dfs(source);
            long long int current = sink;
            vector <long long int> path;
            while(current != source){
                path.push_back(current);
                current = parent[current];
            }
            path.push_back(current);
            
            reverse(path.begin(),path.end());
            long long int BottleNeck = 1e18;
            for(long long int i=0;i<(long long int)path.size()-1;i++){
                BottleNeck = min(BottleNeck,Residual[path[i]][path[i+1]]);
            }
            for(long long int i=0;i<(long long int)path.size()-1;i++){
                Residual[path[i]][path[i+1]] -= BottleNeck;
            }
            flow += BottleNeck;
        }
        return {flow,Residual};
    }

};

int main(){
    ios_base::sync_with_stdio(false);cin.tie(NULL);
    long long int nodes,edges;
    cin>>nodes>>edges;
    vector <vector <long long int>> graph(nodes+1,vector <long long int> (nodes+1)),Cap(nodes+1,vector <long long int> (nodes+1));
    for(long long int i=0;i<edges;i++){
        long long int u,v,c;
        cin>>u>>v>>c;
        graph[u][v] = 1;
        Cap[u][v] += c;
    } 
    vector <vector <long long int>> FinalGraph = graph,FinalCost = Cap;
    auto simply = [&](){
        for(long long int i=1;i<=nodes;i++){
            for(long long int j=i+1;j<=nodes;j++){
                if(FinalCost[i][j] != 0 && FinalCost[j][i] != 0){
                    if(FinalCost[i][j] >= FinalCost[j][i]){
                        FinalCost[i][j] -= FinalCost[j][i];
                        FinalCost[j][i] = 0;
                    }
                    else{
                        FinalCost[j][i] -= FinalCost[i][j];
                        FinalCost[i][j] = 0;
                    }
                }
            }
        }

    };
    for(long long int i=1;i<=nodes;i++){
        for(long long int j=1;j<=nodes;j++){
            if(i == j){
                continue;
            }
            simply();
            Dinic_Max_Flow_Modified MF(FinalGraph,FinalCost,nodes);
            pair <long long int,vector <vector <long long int>>> result = MF.maxFlow(i,j);
            if(result.first > 0){
                FinalGraph[i][j] = 1;
                FinalCost = result.second;
                FinalCost[i][j] += result.first;
            }
        }
    }
    cout << "Final Result\n";
    simply();
    for(long long int i=1;i<=nodes;i++){
        for(long long int j=1;j<=nodes;j++){
            if(FinalCost[i][j] > 0){
                cout << "Person " << i << " gives Person " << j << " " << FinalCost[i][j] << "\n";  
            }
        }
    }
}


// 6 9
// 1 3 30 
// 1 5 10
// 2 3 10
// 2 4 30
// 2 5 10
// 2 6 10
// 3 4 40
// 4 5 20
// 5 6 50