
import csstype.Display
import csstype.FlexDirection
import emotion.react.css
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.p
import react.router.useNavigate
import react.useEffectOnce
import react.useState

private val scope = MainScope()


val ShareLists = FC<Props>{
    var user by useState(emptyList<User>())
    val (exist, setExist) = useState(false)
    val navigate = useNavigate()

    useEffectOnce {
        scope.launch{
            user = getUser()
        }
    }


    div{
        css{
            display = Display.flex
            flexDirection = FlexDirection.column

        }

        shareListsComponent{
            onSubmit={input ->
                val userInfo = Share(input, true)
                console.log(input)
                scope.launch{
                    if(searchPartner(userInfo) == "True"){
                        owner = userInfo.username
                        resetActive()
                        navigate("/index")
                        console.log("Pray to god that it works")
                    }else{
                        setExist(true)
                    }
                }

            }
        }
        if(exist){
            p{
                id = "exists"
                +"Incorrect user"
            }
        }
    }
}