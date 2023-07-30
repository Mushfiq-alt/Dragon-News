import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'
const QZone = () => {
    return (
        <div className="bg-light mt-5 ">
            <h4 className='p-3'>Q-Zone</h4>
            <div className='ms-4'>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;