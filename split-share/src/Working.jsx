import React, { useState } from 'react'
import Person from './Person';

function Working() {
    const [persons,setPersons] = useState([]);
    const [from,setFrom] = useState('');
    const [to,setTo] = useState('');
    const [amount,setAmount] = useState('');
    const [resultFinal,setResultFinal] = useState([]);
    const [display,setDisplay] = useState(false);

    const MaxFlow = (e) => {
        e.preventDefault();
        class Dinic_Max_Flow_Modified {
            constructor(graph, Cap, n) {
              this.n = n;
              this.graph = graph;
              this.Cap = Cap;
            }
            findLevel(source) {
              this.Level = new Array(this.n + 1).fill(-1);
              this.Level[source] = 0;
              const q = [];
              q.push(source);
              while (q.length > 0) {
                const node = q.shift();
                for (let i = 1; i <= this.n; i++) {
                  if (
                    this.Level[i] === -1 &&
                    this.Residual[node][i] > 0 &&
                    this.graph[node][i] === 1
                  ) {
                    this.Level[i] = this.Level[node] + 1;
                    q.push(i);
                  }
                }
              }
            }
          
            maxFlow(source, sink) {
              this.Residual = [...this.Cap];
              let flow = 0;
              const parent = new Array(this.n + 1);
              const dfs = (node) => {
                if (node === sink) {
                  parent[sink] = node;
                  return true;
                }
                let ok = false;
                for (let i = 1; i <= this.n; i++) {
                  if (
                    this.graph[node][i] === 1 &&
                    this.Level[i] === this.Level[node] + 1 &&
                    this.Residual[node][i] > 0
                  ) {
                    if (dfs(i)) {
                      parent[i] = node;
                      ok = true;
                    }
                  }
                }
                return ok;
              };
              while (true) {
                this.findLevel(source);
                if (this.Level[sink] === -1) {
                  break;
                }
                dfs(source);
                let current = sink;
                const path = [];
                while (current !== source) {
                  path.push(current);
                  current = parent[current];
                }
                path.push(current);
          
                path.reverse();
                let BottleNeck = 10000000000000;
                for (let i = 0; i < path.length - 1; i++) {
                  BottleNeck = Math.min(BottleNeck, this.Residual[path[i]][path[i + 1]]);
                }
                for (let i = 0; i < path.length - 1; i++) {
                  this.Residual[path[i]][path[i + 1]] -= BottleNeck;
                }
                flow += BottleNeck;
              }
              return [flow, this.Residual];
            }
          }
          
          function main() {
            const names = new Map();
            const reverseNames = new Map();
            let nodes = 1;let edges = persons.length;   
            for(let i=0;i<edges;i++){
                if(names.has(persons[i].from) === false){
                    names.set(persons[i].from,nodes);
                    reverseNames.set(nodes,persons[i].from);
                    nodes++;
                }
                if(names.has(persons[i].to) === false){
                    names.set(persons[i].to,nodes);
                    reverseNames.set(nodes,persons[i].to);
                    nodes++;
                }
            }
            nodes--;
            const graph = Array.from({ length: nodes + 1 }, () =>
              Array.from({ length: nodes + 1 }, () => 0)
            );
            let Cap = Array.from({ length: nodes + 1 }, () =>
              Array.from({ length: nodes + 1 }, () => 0)
            );
            
            for (let i = 0; i < edges; i++) {
              const u = names.get(persons[i].from);
              const v = names.get(persons[i].to);
              const c = parseInt(persons[i].amount);
              graph[u][v] = 1;
              Cap[u][v] += c;
            }    
            let FinalGraph = [...graph];
            let FinalCost = [...Cap];
            const simplify = () => {
              for (let i = 1; i <= nodes; i++) {
                for (let j = i + 1; j <= nodes; j++) {
                  if (FinalCost[i][j] !== 0 && FinalCost[j][i] !== 0) {
                    if (FinalCost[i][j] >= FinalCost[j][i]) {
                      FinalCost[i][j] -= FinalCost[j][i];
                      FinalCost[j][i] = 0;
                    } else {
                      FinalCost[j][i] -= FinalCost[i][j];
                      FinalCost[i][j] = 0;
                    }
                  }
                }
              }
            };
          
            for (let i = 1; i <= nodes; i++) {
              for (let j = 1; j <= nodes; j++) {
                if (i === j) {
                  continue;
                }
                simplify();
                // console.log(FinalCost);
                const MF = new Dinic_Max_Flow_Modified(FinalGraph, FinalCost, nodes);
                const result = MF.maxFlow(i, j);
                // console.log(result);
                if (result[0] > 0) {
                  FinalGraph[i][j] = 1;
                  FinalCost = result[1];
                  FinalCost[i][j] += result[0];
                }
              }
            }
            simplify();
            const results = [];
            for (let i = 1; i <= nodes; i++) {
              for (let j = 1; j <= nodes; j++) {
                if (FinalCost[i][j] > 0) {
                    //   console.log(
                    //     "Person " + i + " gives Person " + j + " " + FinalCost[i][j]
                    //   );
                    results.push(`${reverseNames.get(i)} gives ${reverseNames.get(j)}: ${FinalCost[i][j]}`);
                }
              }
            }
            setResultFinal(results);
          }
          main();
          
          setDisplay(true);
    }


    const addPerson = (e) => {
        e.preventDefault();
        setPersons([...persons,{from,to,amount}]);
        setAmount('');
        setFrom('');
        setTo('');
    }
    const removePerson = (e) => {
        e.preventDefault();
        persons.splice(e.target.name,1);
        const newPerson = [];
        for(let i=0;i<persons.length;i++){
            newPerson.push(persons[i]);
        }
        setPersons(newPerson);
    }

  return (
    <div id='formArea'>
        <h1>Add Transactions:</h1> 
        <form onSubmit={addPerson}>
            FROM: <input value={from} type="text" required placeholder='From' onChange={(e)=>setFrom(e.target.value)}/>
            TO: <input value={to} type="text" required placeholder='To' onChange={(e)=>setTo(e.target.value)}/>
            AMOUNT: <input value={amount} type="number" required placeholder='Amount' onChange={(e)=>setAmount(e.target.value)}/>
            <button type='submit'>ADD</button>
            <button id='computeButton' onClick={MaxFlow}>SIMPLIFY!</button>
        </form>
        <div>
            {Array.from(persons)?.map((person,idx) => {
                return <div id='addPerson'>
                    <Person {...{from: person.from, to: person.to,amount: person.amount}}/>
                    <div className='persondelete'>
                        <button id='personDelete' name={idx} onClick={removePerson}>DELETE</button>
                    </div>
                </div>
            })}
        </div>
        {display && Array.from(resultFinal)?.map((res)=>{
            return <>
            Simplified: 
            <div>
                {res}
            </div>
            </>
        })}
    </div>
  )
}

export default Working