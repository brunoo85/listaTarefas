const Filter = ({ status, setStatus, prior, setPrior}) => {
     return (
       <div className="filter">
         <h2>Filtrar:</h2>
         <div className="filter-options">
             <div>
                  <p>Status:</p>
                  <select value={status} onChange={(e) => setStatus(e.target.value)}>
                      <option value="All">Todas</option>
                      <option value="Completed">Completas</option>
                      <option value="Incomplete">Imcompletas</option>
                  </select>
             </div>
             <div>
                  <p>Prioridade:</p>
                  <select value={prior} onChange={(e) => setPrior(e.target.value)}>
                      <option value="All">Todas</option>
                      <option value="Urgente">Urgente</option>
                      <option value="Alta">Alta</option>
                      <option value="Média">Média</option>
                      <option value="Baixa">Baixa</option>
                  </select>
                  {/* <button onClick={() =>setprior("Asc")}></button>
                  <button onClick={() =>setSort("Desc")}>Desc</button> */}
             </div>
         </div>
       </div>
     )
   }
   
   export default Filter
   