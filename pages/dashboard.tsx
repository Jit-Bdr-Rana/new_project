import Container from "@/components/Container"
import Mainlayout from "@/layouts/Mainlayout"

const breadCrumb:{title:string,link:string}[]=[
  {
    title:'Home',
    link:'#'
  },
  {
    title:'Dashboard',
    link:'#'
  },
]

const dashboard=()=>{
    return (
        <div>
            <Mainlayout
              title={'Dashboard'}
            > 
            <Container 
            breadCrumb={breadCrumb}
            title={'Dasboard'}
            >
               <div>
                this is dashboard
              </div>
            </Container>
            </Mainlayout>
        </div>
    )
}

export default dashboard