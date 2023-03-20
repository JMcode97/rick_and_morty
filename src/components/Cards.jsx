import Card from './Card';

export default function Cards({ characters, onClose }) {
   return (
      <div>
         {
            characters.map(({ id, name, status, species, gender, image }) => {
               return(
                  <>
                     <Card 
                     key={id}
                     id={id}
                     name={name}
                     status={status}
                     species={species}
                     gender={gender}
                     origin={name.origin}
                     image={image}
                     onClose={onClose}
                     />
                  </>
               )
            })
         }
      </div>
   )
}
